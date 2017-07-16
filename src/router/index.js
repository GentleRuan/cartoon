import Vue from 'vue'
import Router from 'vue-router'
const index = r => require.ensure([], () => r(require('@/pages/index.vue')), 'Hello')
const classify = r => require.ensure([], () => r(require('@/pages/classify.vue')), 'option')
const rank = r => require.ensure([], () => r(require('@/pages/rank.vue')), 'option')
const original = r => require.ensure([], () => r(require('@/pages/original.vue')), 'option')
const book = r => require.ensure([], () => r(require('@/pages/book.vue')), 'option')

Vue.use(Router)

export default new Router({
  routes: [
    {
		path: '/',
		name: 'index',
		component: index
    },{
    	path:'/classify',
    	component: classify
    },{
    	path:'/rank',
    	component: rank
    },{
    	path:'/original',
    	component: original
    },{
    	path:'/book',
    	component: book
    }
  ]
})
