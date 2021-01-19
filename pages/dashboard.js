import Head from 'next/head';
import EmptyState from '@/components/EmptyState';
import fetcher from '@/utils/fetcher';
import SiteTableSkeleton from '@/components/SiteTableSkeleton';
import DashboardShell from '@/components/DashboardShell';
import useSWR from 'swr';
import SiteTable from '@/components/SiteTable';


const Dashboard = () => {
    const { data } = useSWR('/api/sites', fetcher)
    if (!data) return <DashboardShell><SiteTableSkeleton /></DashboardShell>

    const componentToRender = data.sites?.length > 0 ? <SiteTable sites={data.sites} /> : <EmptyState />

    return <DashboardShell>{componentToRender}</DashboardShell>;
};

export default Dashboard;