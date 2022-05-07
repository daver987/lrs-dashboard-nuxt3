import {
  CogIcon,
  CollectionIcon,
  HomeIcon,
  PhotographIcon,
  UserGroupIcon,
  ViewGridIcon,
} from '@heroicons/vue/outline'

export default defineEventHandler((event) => {
  return [
    { name: 'Home', to: '/', icon: HomeIcon, current: true },
    { name: 'Quotes', to: '/quotes', icon: ViewGridIcon, current: false },
    { name: 'Bookings', to: '/bookings', icon: PhotographIcon, current: false },
    {
      name: 'Messaging',
      to: '/messaging',
      icon: UserGroupIcon,
      current: false,
    },
    {
      name: 'Resources',
      to: '/resources',
      icon: CollectionIcon,
      current: false,
    },
    { name: 'Settings', to: '/settings', icon: CogIcon, current: false },
  ]
})
