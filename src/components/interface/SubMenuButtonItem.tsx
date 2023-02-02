import { forwardRef } from 'react';

interface IProps {
  items: string[];
  filterSelected: string;
  setFilter: (selected: string) => void;
}

type Ref = HTMLDivElement;

const SubMenuButtonItem = forwardRef<Ref, IProps>(
  ({ items, setFilter, filterSelected }, ref) => {
    return (
      <div
        className="hidden absolute bg-white z-10 top-[32px] left-[50%] border border-slate-300 -translate-x-1/2 drop-shadow-lg"
        ref={ref}
      >
        {items.map((item, index) => {
          return (
            <button
              key={index}
              onClick={() => setFilter(item)}
              className={`block w-full p-4 whitespace-nowrap hover:bg-slate-100 border-b border-zinc-200 ${
                filterSelected === item ? 'text-blue' : 'text-current'
              }`}
            >
              {item}
            </button>
          );
        })}
      </div>
    );
  }
);

export default SubMenuButtonItem;
