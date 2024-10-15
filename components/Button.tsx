import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
  className?: string;  // Adiciona o suporte para className
};

const Button = ({ type, title, icon, variant, full, className }: ButtonProps) => {
  return (
    <button
      className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'} ${className}`} // Propaga className
      type={type}
    >
      {icon && <Image src={icon} alt={title} width={20} height={20} />}
      <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  );
};

export default Button;
