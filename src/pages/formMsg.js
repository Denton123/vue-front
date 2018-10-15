import onPicUpload from './one/components/onePicUpload'
import axios from 'axios'

function getMusic () {
	let id = localStorage.getItem('user')
	let options = []
	axios.get(`${music.showByUser}/${id}`).then(res => {
		console.log(res);
		res.data.forEach(v => {
			options.push({
				value: v.id,
				label: v.title
			})
		})
		console.log(options);
	})
	return options
}

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
			name: 'title',
			rules: [{required: true, trigger: 'blur', message: '在5到19个数'}]
		},
		{
			type: 'upload',
			label: '内容',
			placeholder: '问题内容',
			name: 'pic',
			modelname: 'idea',
			rules: null,
			rules: [{required: true, trigger: 'blur'}]
		}
	],
	// 音乐
	musicComponent: [
		{
			type: 'text',
			label: '类型',
			placeholder: '类型',
			name: 'title',
			rules: [{required: true, trigger: 'blur', message: '在5到19个数'}]
		},
		{
			type: 'upload',
			label: '图片',
			placeholder: '问题内容',
			name: 'pic',
			modelname: 'music',
			rules: null,
			rules: [{required: true, trigger: 'blur'}]
		}
	],
	// 音乐
	instrumentComponent: [
		{
			type: 'text',
			label: '产品名称',
			placeholder: '产品名称',
			name: 'title',
			rules: [{required: true, trigger: 'blur', message: '在5到19个数'}]
		},
		{
			type: 'text',
			label: '产品描述',
			placeholder: '产品描述',
			name: 'desc',
			rules: [{required: true, trigger: 'blur', message: '在5到19个数'}]
		},
		{
			type: 'select',
			label: '产品类别',
			placeholder: '产品类别',
			name: 'musicId',
			options: getMusic(),
        	value: '',
			rules: [{required: true, trigger: 'blur', message: '在5到19个数'}]
		},
		{
			type: 'upload',
			label: '图片',
			placeholder: '问题内容',
			name: 'pic',
			modelname: 'musicProduct',
			rules: null,
			rules: [{required: true, trigger: 'blur'}]
		}
	],
}
