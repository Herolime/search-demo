import { FC, PropsWithChildren } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";

export const AppShell: FC<PropsWithChildren> = ({children}) => (
    <>
    <Header/>
    <div>
        {children}
    </div>
    <Footer/>
    </>
)