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
    user: User;
}

export declare interface MobileNavProps {
    user: User;
}

export declare interface RightSidebarProps {
    user: User;
    transactions: Transaction[];
    banks: Bank[] & Account[];
}
  
declare type Transaction = {
    id: string;
    $id: string;
    name: string;
    paymentChannel: string;
    type: string;
    accountId: string;
    amount: number;
    pending: boolean;
    category: string;
    date: string;
    image: string;
    $createdAt: string;
    channel: string;
    senderBankId: string;
    receiverBankId: string;
};

declare type Bank = {
    $id: string;
    accountId: string;
    bankId: string;
    accessToken: string;
    fundingSourceUrl: string;
    userId: string;
    shareableId: string;
};
  

export declare type User = {
    $id: string;
    email: string;
    userId: string;
    dwollaCustomerUrl: string;
    dwollaCustomerId: string;
    firstName: string;
    lastName: string;
    name: string;
    address1: string;
    city: string;
    state: string;
    postalCode: string;
    dateOfBirth: string;
    ssn: string;
};
  
export declare interface CreditCardProps {
    account: Account;
    userName: string;
    showBalance?: boolean;
}

export declare interface FooterProps {
  user: User;
  type?: 'mobile' | 'desktop'
}


export declare type Account = {
    id: string;
    availableBalance: number;
    currentBalance: number;
    officialName: string;
    mask: string;
    institutionId: string;
    name: string;
    type: string;
    subtype: string;
    appwriteItemId: string;
    shareableId: string;
};
  
export declare interface AuthFormProps {
    type: 'sign-in' | 'sign-up';
}

export declare type SignUpParams = {
    firstName?: string;
    lastName?: string;
    address1?: string;
    city?: string;
    state?: string;
    postalCode?: string;
    dateOfBirth?: string;
    ssn?: string;
    email: string;
    password: string;
};
  
export declare interface SignInProps {
    email: string;
    password: string;
}
  

export declare interface PlaidLinkProps {
  user: User;
  variant?: "primary" | "ghost";
  dwollaCustomerId?: string;
}

export declare interface exchangePublicTokenProps {
    publicToken: string;
    user: User;
}


export declare interface createBankAccountProps {
  accessToken: string;
  userId: string;
  accountId: string;
  bankId: string;
  fundingSourceUrl: string;
  shareableId: string;
}

export declare type NewDwollaCustomerParams = {
    firstName: string;
    lastName: string;
    email: string;
    type: string;
    address1: string;
    city: string;
    state: string;
    postalCode: string;
    dateOfBirth: string;
    ssn: string;
};
  
export declare interface CreateFundingSourceOptions {
  customerId: string; // Dwolla Customer ID
  fundingSourceName: string; // Dwolla Funding Source Name
  plaidToken: string; // Plaid Account Processor Token
  _links: object; // Dwolla On Demand Authorization Link
}

export declare type TransferParams = {
    sourceFundingSourceUrl: string;
    destinationFundingSourceUrl: string;
    amount: string;
};

  
export declare interface CreateFundingSourceOptions {
    customerId: string; // Dwolla Customer ID
    fundingSourceName: string; // Dwolla Funding Source Name
    plaidToken: string; // Plaid Account Processor Token
    _links: object; // Dwolla On Demand Authorization Link
}
  


export declare type AddFundingSourceParams = {
    dwollaCustomerId: string;
    processorToken: string;
    bankName: string;
};
  