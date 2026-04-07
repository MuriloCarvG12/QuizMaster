import { useEffect, useState } from "react";
import UserInfo from "../../interfaces/user_info";
import { Link } from "react-router-dom";

export default function AlternativeHeader({ userId }: { userId: number }) {
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch(`http://localhost:3000/User/GetUser/${userId}`);
            const data = await response.json();
            setUserInfo(data);
        };

        if (userId) fetchUser();
    }, [userId]);

    return (
        <>
            <div className="Header">
                <h1 style={{ marginBottom: "1%" }}>Quiz Master !</h1>

                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginLeft: "80px" }}>
                 
                        <Link to="/Home" state={{ userId }} style={{ textDecoration: 'none', color: 'inherit' }}><h1>Home</h1></Link>
                        <Link to="/QuestionScreen" state={{ userId }} style={{ textDecoration: 'none', color: 'inherit' }}><h1>Perguntas</h1></Link>
                        <Link to="/ExamScreen" state={{ userId }} style={{ textDecoration: 'none', color: 'inherit' }}><h1>Simulados</h1></Link>
                        <Link to="/UserScreen" state={{ userId }} style={{ textDecoration: 'none', color: 'inherit' }}><h1>Usuário</h1></Link>

                </div>
            </div>
        </>
    );
}