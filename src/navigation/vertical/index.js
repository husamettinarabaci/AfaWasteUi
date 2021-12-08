import vm from '@/main';

let items = [];

if (vm.$route.name.includes('afatek')){
  items = [
    {
      header: 'Müşteriler'
    },
    {
      title: 'Müşteri Listesi',
      route: 'afatek-customers',
      icon: 'HomeIcon',
    },
    {
      title: 'Yeni Müşteri',
      route: 'afatek-customers-new',
      icon: 'HomeIcon',
    },
    {
      title: 'Müşteri Cihaz Atama',
      route: 'afatek-customers-edit',
      icon: 'HomeIcon',
    }    
  ]
}
else {
  items = [
    {
      title: 'Anasayfa',
      route: 'rfidReportsDashboard',
      icon: 'HomeIcon',
    },
    {
      header: 'Raporlar',
    },
    {
      title: 'RFID Takip Sistemi',
      route: 'containers',
      icon: 'HomeIcon',
    },
    {
      title: 'Kamyonlar',
      route: 'trucks',
      icon: 'TruckIcon',
    },
    /*
    {
      header: 'Reports'
    },
    {
      title: 'Daily',
      route: 'containersDailyReports',
      icon: 'HomeIcon'
    },
    {
      title: 'All',
      route: 'containersReports',
      icon: 'HomeIcon'
    },
    {
      header: 'Management',
    },
    {
      title: 'Container List',
      route: 'containersManagement',
      icon: 'HomeIcon',
    },
    {
      title: 'Truck List',
      route: 'trucksManagement',
      icon: 'TruckIcon',
    },
    {
      title: 'Users',
      icon: 'UserIcon',
      tag: '2',
      tagVariant: 'light-warning',
      children: [
        {
          title: 'Users',
          route: 'usersList',
        }
      ],
    },
    {
      header: 'System',
    },
    {
      title: 'Settings',
      route: 'settings',
      icon: 'SettingsIcon',
    }
    */
  ]
}

export default items;