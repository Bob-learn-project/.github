export declare interface HeaderBoxProps {
    type?: "title" | "greeting";
    title: string;
    subtext: string;
    user?: string;
}

export declare interface TotalBalanceBoxProps {
    accounts?: [];
    title: string;
    totalBanks: number;
    totalCurrentBalance: number;
}

export declare interface DoughnutChartProps {
    accounts?: [];
}

export declare interface SiderbarProps {
    user: string;
}
