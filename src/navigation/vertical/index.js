let items =  [
  {
    title: 'Dashboard',
    route: 'rfidReportsDashboard',
    icon: 'HomeIcon',
  },
  {
    header: 'Devices',
  },
  {
    title: 'Containers',
    route: 'containers',
    icon: 'HomeIcon',
  },
  {
    title: 'Trucks',
    route: 'trucks',
    icon: 'TruckIcon',
  },
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
]

export default items;