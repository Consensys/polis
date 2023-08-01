import { FC, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Steps from "./Steps";
import { IApplicationInput } from "./types";

interface ApplicationFormProps {
  modalOpen: boolean;
  closeModal: () => void;
}

interface ApplicationFormCreateProps extends ApplicationFormProps {
  isEditMode: false;
}

interface ApplicationFormEditProps extends ApplicationFormProps {
  isEditMode: true;
  application: IApplication;
}

const ApplicationForm: FC<
  ApplicationFormCreateProps | ApplicationFormEditProps
> = ({ closeModal, modalOpen, ...rest }) => {
  return (
    <Transition.Root show={modalOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative px-4 pt-5 pb-4 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:w-full sm:max-w-xl sm:p-6">
                <Steps closeModal={closeModal} {...rest} />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ApplicationForm;
