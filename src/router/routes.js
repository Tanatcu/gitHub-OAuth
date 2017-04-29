import LoginPage from '@/components/pages/LoginPage'
import RedirectPage from '@/components/pages/RedirectPage'
import Dashboard from '@/components/pages/Dashboard'
import Repositories from '@/components/pages/Dashboard/Repositories'
import IssuesList from '@/components/pages/Dashboard/IssuesList'

export default [
	{
		path: '/',
		name: 'LoginPage',
		component: LoginPage
	},
	{
		path: '/redirect',
		name: 'RedirectPage',
		component: RedirectPage
	},
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: Dashboard,
		children: [
			{
				path: '/',
				name: 'Repositories',
				component: Repositories
			},
			{
				path: 'repos/:owner/:repo/issues',
				name: 'IssuesList',
				component: IssuesList
			}
		]
	}
]
