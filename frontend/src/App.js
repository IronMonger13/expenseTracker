import { useMemo, useState } from "react";
import styled from "styled-components";
import bg from "./img/bg.png";
import { MainLayout } from "./Styles/Layouts";
import Orb from "./Components/Orb/Orb";
import Navigation from "./Components/Navigation/Navigation";
import Dashboard from "./Components/Dashboard/Dashboard";
import Incomes from "./Components/Incomes/Incomes";
import Expenses from "./Components/Expenses/Expenses";
import { GlobalContext, useGlobalContext } from "./Context/GlobalContext";

function App() {
    const [active, setActive] = useState(1);

    const global = useGlobalContext();
    console.log(useGlobalContext)

    const displayData = () => {
        switch (active) {
            case 1:
                return <Dashboard></Dashboard>;
            case 2:
                return <Dashboard></Dashboard>;
            case 3:
                return <Incomes></Incomes>;
            case 4:
                return <Expenses></Expenses>;
            default:
                return <Dashboard></Dashboard>;
        }
    };

    const orbMemo = useMemo(() => {
        return <Orb></Orb>;
    }, []);

    return (
        <AppStyled bg={bg} className="App">
            {orbMemo}
            <MainLayout>
                <Navigation active={active} setActive={setActive}></Navigation>
                <main>{displayData()}</main>
            </MainLayout>
        </AppStyled>
    );
}

const AppStyled = styled.div`
    height: 100vh;
    background-image: url(${(props) => props.bg});
    position: relative;
    main {
        flex: 1;
        background: rgba(252, 246, 249, 0.78);
        border: 3px solid #ffffff;
        backdrop-filter: blur(4.5px);
        border-radius: 32px;
        overflwo: auto;
        overflow-x: hidden;
        &::webkit-scrollbar {
            width: 0;
        }
    }
`;

export default App;
