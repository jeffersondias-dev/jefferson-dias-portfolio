import react from "react";
import Button from "../Button/Button";

const Nav = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <div className="text-2xl px-10 font-bold">Jefferson Dias</div>
      <div className="flex space-x-4">
        <Button label="Projetos" variant="secondary" destination="/projetos" />
        <Button label="Github" variant="tertiary" destination="sobre" />
        <Button
          label="Linkedin"
          variant="quarternary"
          external="true"
          destination="https://github.com/jeffersondias-dev"
        />
      </div>
    </nav>
  );
};

export default Nav;
