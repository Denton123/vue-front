import onPicUpload from './one/components/onePicUpload'

export default {
	questionComponent: [
		{
			type: 'text',
			label: '标题',
			placeholder: '问题标题',
			name: 'title',
			rules: [{required: true, trigger: 'blur', message: '在5到19个数'}]
		},
		{
			type: 'editor',
			label: '内容',
			placeholder: '问题内容',
			name: 'content',
			rules: null
		}
	],
	articleComponent: [
		{
			type: 'text',
			label: '标题',
			placeholder: '问题标题',
			name: 'title',
			rules: [{required: true, trigger: 'blur', message: '在5到19个数'}]
		},
		{
			type: 'editor',
			label: '内容',
			placeholder: '问题内容',
			name: 'test',
			rules: null
		}
	],
	// 一个
	ideaComponent: [
		{
			type: 'text',
			label: '一句话',
			placeholder: '一句话',
			name: 'word',
			rules: [{required: true, trigger: 'blur', message: '在5到19个数'}]
		},
		{
			type: 'upload',
			label: '内容',
			placeholder: '问题内容',
			name: 'pic',
			modelname: 'idea',
			rules: null,
			uploadComponent: onPicUpload
		}
	],
}
