import { forwardRef } from 'react';

interface ModalProps {
  subitens: string[];
}

type Ref = HTMLDivElement;

const Modal = ({ subitens }: ModalProps) => {
  return (
    <div
      className="hidden absolute bg-white z-10 top-[32px] left-[50%] border border-slate-300 -translate-x-1/2 drop-shadow-lg"
      // ref={ref}
    >
      {subitens.map((item, index) => {
        return (
          <button
            key={index}
            className="block w-full p-4 whitespace-nowrap hover:bg-slate-100 border-b border-zinc-200"
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Modal;
