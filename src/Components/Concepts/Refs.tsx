import { FormEvent, useRef } from "react";

export const Refs: React.FC = () => {
  const inputNameRef = useRef<HTMLInputElement>(null); // { current: null}
  const inputEmailRef = useRef<HTMLInputElement>(null); // { current: null}
  const inputPasswordRef = useRef<HTMLInputElement>(null); // { current: null}

  function handleOnSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(`name: ${inputNameRef.current?.value}`);
    console.log(`email: ${inputEmailRef.current?.value}`);
    console.log(`senha: ${inputPasswordRef.current?.value}`);
  }

  return (
    <form
      style={{ padding: "2rem" }}
      onSubmit={(event) => handleOnSubmit(event)}
    >
      <h1>useRef</h1>

      <br />
      <input type="text" placeholder="Nome Completo" ref={inputNameRef} />
      <input type="email" placeholder="E-mail" ref={inputEmailRef} />
      <input type="password" placeholder="Senha" ref={inputPasswordRef} />

      <button typeof="submi">Submit</button>
      <br />
    </form>
  );
};
