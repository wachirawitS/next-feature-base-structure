type Props = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  return <section>{children}</section>;
}
