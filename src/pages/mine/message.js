import card from './child-component/card.vue'
export default [
	{
		label: '动态',
		name: 'dynamic',
		cardComponent: card,
		url: question.list
	},
	{
		label: '回答',
		name: 'answer'
	},
	{
		label: '提问',
		name: 'question',
		cardComponent: card
	},
	{
		label: '文章',
		name: 'article'
	},
	{
		label: '专栏',
		name: 'column'
	},
	{
		label: '想法',
		name: 'idea'
	}
]
