type AddOptions =
  | {
      blob: Blob;
      fileName: string;
    }
  | {
      files: File[];
    }
  | {
      file: File;
    };

export const add = async (data: AddOptions) => {
  let baseUrl = `${process.env.INFURA_IPFS_ENDPOINT}/api/v0/add`;
  let hash: string;
  const formData = new FormData();

  if ("blob" in data) {
    formData.append("data", data.blob, data.fileName);
  }

  if ("files" in data) {
    const { files } = data;
    files.forEach((file) => {
      formData.append("files", file);
    });
    baseUrl += "?wrap-with-directory=true";
  }

  if ("file" in data) {
    const { file } = data;
    formData.append("file", file);
  }

  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(
            process.env.INFURA_IPFS_KEY + ":" + process.env.INFURA_IPFS_SECRET
          ).toString("base64"),
      },
      body: formData,
    });

    if ("files" in data) {
      const cids = await response.text();
      const lines = cids.split("\n").filter(Boolean);
      const directory = lines.at(-1);
      if (!directory) {
        throw new Error("No directory returned from IPFS");
      }
      hash = JSON.parse(directory).Hash;
    } else {
      hash = (await response.json()).Hash;
    }

    return hash;
  } catch (error) {
    console.error("Error adding file", error);
  }
};

export const cat = async (hash: string) => {
  const response = await fetch(
    `${process.env.INFURA_IPFS_ENDPOINT}/api/v0/cat?arg=${hash}`,
    {
      method: "POST",
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(
            process.env.INFURA_IPFS_KEY + ":" + process.env.INFURA_IPFS_SECRET
          ).toString("base64"),
      },
    }
  );

  return await response.json();
};

export const getDirectoryContent = async (hash: string): Promise<string[]> => {
  const dirResponse = await fetch(`https://dweb.link/api/v0/ls?arg=${hash}`);

  const directory = await dirResponse.json();

  console.log("Directory: ", hash, directory)

  return directory.Objects[0].Links.map((sc: any) => sc.Hash);
};
