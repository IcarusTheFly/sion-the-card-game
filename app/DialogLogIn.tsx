// import {
//   Modal,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   useDisclosure,
// } from "@nextui-org/modal";
// import { Button } from "@nextui-org/button";

// export default function DialogLogIn({
//   isOpen,
//   onOpenChange,
// }: {
//   isOpen: boolean;
//   onOpenChange: (isOpen: boolean) => void;
// }) {
//   //   const { isOpen, onOpen, onOpenChange } = useDisclosure();
//   return (
//     <Modal
//       isOpen={isOpen}
//       onOpenChange={onOpenChange}
//       isDismissable={false}
//       isKeyboardDismissDisabled={true}
//     >
//       <ModalContent>
//         {(onClose: (e: any) => void) => (
//           <>
//             <ModalHeader className="flex flex-col gap-1">
//               Modal Title
//             </ModalHeader>
//             <ModalBody>
//               <p>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
//                 pulvinar risus non risus hendrerit venenatis. Pellentesque sit
//                 amet hendrerit risus, sed porttitor quam.
//               </p>
//             </ModalBody>
//             <ModalFooter>
//               <Button color="danger" variant="light" onPress={onClose}>
//                 Close
//               </Button>
//               <Button color="primary" onPress={onClose}>
//                 Log In
//               </Button>
//             </ModalFooter>
//           </>
//         )}
//       </ModalContent>
//     </Modal>
//   );
// }
