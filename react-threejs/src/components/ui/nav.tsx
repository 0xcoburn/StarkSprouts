import { Button } from "./button";

export const Nav = () => {
  return (
    <nav className="bg-gray flex justify-end">
      <div>
        <Button>
          <a href="/game">Launch App</a>
        </Button>
      </div>
    </nav>
  );
};
