export default [
  {
    title: 'Dashboard',
    route: 'dashboard',
    icon: 'HomeIcon',
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
    title: 'Settings',
    route: 'settings',
    icon: 'SettingsIcon',
  }
]
