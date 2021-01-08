import Head from 'next/head';
import EmptyState from '@/components/EmptyState';
import fetcher from '@/utils/fetcher';
import SiteTableSkeleton from '@/components/SiteTableSkeleton';
import DashboardShell from '@/components/DashboardShell';
import { Button, Flex, Text, Code, Icon } from '@chakra-ui/react';
import useSWR from 'swr';
import SiteTable from '@/components/SiteTable';


const Dashboard = () => {
    const { data } = useSWR('/api/sites', fetcher)
    /* if (!data) return <DashboardShell><SiteTableSkeleton /></DashboardShell> */

    console.log(data);
    const componentToRender = data.sites?.length > 0 ? <SiteTable sites={data.sites} /> : <EmptyState />

    return <DashboardShell>{componentToRender}</DashboardShell>;
};

export default Dashboard;