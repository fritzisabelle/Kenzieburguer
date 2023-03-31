import { Logo } from "./LogoBurguer/LogoBurguer";
import { HeaderContainer } from "../../Styles/Header/HeaderContainer";
import { FormSearch } from "../../Styles/Inputs/InputContainer";
import { Buttons } from "../../Styles/buttons/Buttons";

export const Header = ({ productList, input, setInput, submit }) => {
  return (
    <HeaderContainer>
      <div>
        <Logo />
        <FormSearch onSubmit={submit}>
          <input
            type="text"
            placeholder="Digitar Pesquisa..."
            value={input.keyword}
            onChange={(event) => setInput({ keyword: event.target.value })}
          />
          <Buttons ButtonStyle="Md" Color="Green" type="submit">
            Pesquisar
          </Buttons>
        </FormSearch>
      </div>
    </HeaderContainer>
  );
};
