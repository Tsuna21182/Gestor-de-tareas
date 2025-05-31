type BtnBaseProps = {
  nombre: string;
  type?: "submit" | "reset" | "button";
};

function BtnBase({ nombre, type = "button" }: BtnBaseProps) {
  return (
    <button
      className="bg-indigo-500 p-5 rounded-2xl text-white font-bold uppercase transition-all duration-300 hover:bg-indigo-700 w-50 cursor-pointer"
      type={type}
    >
      {nombre}
    </button>
  );
}

export default BtnBase;
