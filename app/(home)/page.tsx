import Presentation from "@/screens/home/widgets/presentation/Presentation";
import Profile from "@/screens/home/widgets/profile/Profile";

export default function Home() {
  return (
    <main className="bg-background">
      <Profile />
      <Presentation />
    </main>
  );
}
