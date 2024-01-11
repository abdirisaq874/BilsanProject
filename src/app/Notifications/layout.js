import Header from '../Components/Header';
import SideBarComponent from '../Components/SideBar';

export const metadata = {
  title: 'Wallet MAnager',
  description: 'Wallet MAnager Component',
};

export default function RootLayout({ children }) {
  return (
    <div className="w-[93vw] mx-auto flex gap-3">
      <SideBarComponent />
      <Header>{children}</Header>
    </div>
  );
}
