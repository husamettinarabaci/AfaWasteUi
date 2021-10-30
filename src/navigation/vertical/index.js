export default [
  {
    title: 'Dashboard',
    route: 'dashboard',
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
    title: 'Reports',
    icon: 'UserIcon',
    children: [
      {
        title: 'Report List',
        route: 'reportsList',
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
