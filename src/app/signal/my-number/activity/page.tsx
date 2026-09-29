import { SignalManagement, SignalUnavailable } from '@/components/signal/SignalShell';
export default function ActivityPage(){return <SignalManagement path="/signal/my-number/activity" title="Activity."><SignalUnavailable noun="activity"/></SignalManagement>}
