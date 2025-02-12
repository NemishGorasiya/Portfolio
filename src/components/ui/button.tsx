interface ButtonProps {
  children: string | React.ReactNode;
  onClick?: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group"
    >
      <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 opacity-[3%]" />
      <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-transform duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-foreground opacity-100 group-hover:-translate-x-8" />
      <span className="relative w-full text-left text-foreground transition-colors duration-200 ease-in-out group-hover:text-background">
        {children}
      </span>
      <span className="absolute inset-0 border border-solid border-black/[.08] dark:border-white/[.145] rounded-full" />
    </button>
  );
};

export default Button;
