import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

interface WaybackDialogProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const WaybackDialog = ({ isOpen, setIsOpen }: WaybackDialogProps) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4 ">
        <DialogPanel className="max-w-lg space-y-4 shadow-md border border-ecto bg-shadow p-12 rounded-lg">
          <DialogTitle className="font-bold">
            Looking for a different version?
          </DialogTitle>
          <img src="/path/to/your/image.jpg" alt="Nightrider" />
          <div className="flex gap-4">
            <button onClick={() => setIsOpen(false)}>Cancel</button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default WaybackDialog;
