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
      header: 'Kullanıcılar'
    },
    {
      title: 'Kullanıcı Listesi',
      route: 'admin-users',
      icon: 'HomeIcon'
    },
    {
      header: 'Ayarlar'
    },
    {
      title: 'Cihaz Ayarları',
      icon: 'HomeIcon',
      children: [
        {
          title: 'Tag Ayarları',
          route: 'admin-devices-tags'
        },
        {
          title: 'Rfid Ayarları',
          route: 'admin-devices-rfid'
        },
        {
          title: 'Ult Ayarları',
          route: 'admin-devices-ult'
        },
        {
          title: 'Recy Ayarları',
          route: 'admin-devices-recy'
        }
      ]
    },
    {
      title: 'Genel Ayarlar',
      icon: 'HomeIcon',
      children: [
        {
          title: 'Admin ayarları',
          route: 'admin-settings-admin'
        },
        {
          title: 'Localization',
          route: 'admin-settings-local'
        }
      ]
    }
  ]
}

export default items;