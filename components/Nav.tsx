import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import NewApplication from "./NewApplication";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Create New Application</button>
      <NewApplication modalOpen={open} closeModal={() => setOpen(false)} />
    </>
  );
};

export default Nav;
