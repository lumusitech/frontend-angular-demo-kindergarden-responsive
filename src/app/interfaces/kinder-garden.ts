export interface KinderGarden {
  id: any;
  name: string;
  address: string;
  email: string;
  tel: string;
  logo:string;
  social: Social[];
}

interface Social{
  name: string;
  url: string;
  icon: string;
}
