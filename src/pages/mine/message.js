import card from './child-component/card.vue'
export default [
	{
		label: '动态',
		name: 'dynamic',
		cardComponent: card,
		blankIcon: 'el-icon-news',
	},
	{
		label: '回答',
		name: 'answer',
		cardComponent: card,
		blankIcon: 'el-icon-tickets'
	},
	{
		label: '提问',
		name: 'question',
		cardComponent: card,
		blankIcon: 'el-icon-document',
        popFlag: true
	},
	{
		label: '文章',
		name: 'article',
		cardComponent: card,
		blankIcon: 'el-icon-news',
        popFlag: true
	},
	{
		label: '专栏',
		name: 'column',
		cardComponent: card,
		blankIcon: 'el-icon-menu'
	},
	{
		label: '想法',
		name: 'idea',
		cardComponent: card,
		blankIcon: 'el-icon-loading',
        popFlag: true
	}
]
