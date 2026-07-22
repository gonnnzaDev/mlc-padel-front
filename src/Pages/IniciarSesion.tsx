import LoginModal from "../Components/LoginModal";

export default function IniciarSesion() {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            width: '100vw',
            margin: 0,
        }}>
            <LoginModal />
        </div>
    );
}
