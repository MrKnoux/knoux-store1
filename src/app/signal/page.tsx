import { SignalExperience } from '@/components/signal/SignalExperience';
import { SignalRail } from '@/components/signal/SignalShell';
export const metadata = { title: 'Signal', description: 'KNOuX phone intelligence.' };
export default function SignalPage(){ return <main id="main-content"><SignalRail path="/signal"/><SignalExperience/></main>; }
