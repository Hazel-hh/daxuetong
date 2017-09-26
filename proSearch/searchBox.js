var Pro = React.createClass({
		getInitialState:function(){
			return {
				data:[
					{
						name:'电锅',
						price:100,
						sale:1000
					},
					{
						name:'炖锅',
						price:100,
						sale:1000
					},
					{
						name:'电碗',
						price:100,
						sale:1000
					},
					{
						name:'铁板烧',
						price:100,
						sale:1000
					},
					{
						name:'开水机',
						price:100,
						sale:1000
					},
					{
						name:'电咖啡壶',
						price:100,
						sale:1000
					},
					{
						name:'电茶壶',
						price:100,
						sale:1000
					},
					{
						name:'电炉',
						price:100,
						sale:1000
					},
					{
						name:'烤箱',
						price:100,
						sale:1000
					},
					{
						name:'面包机',
						price:100,
						sale:1000
					},
					{
						name:'果汁机',
						price:100,
						sale:1000
					},
					{
						name:'搅拌器',
						price:100,
						sale:1000
					},
					{
						name:'烘碗机',
						price:100,
						sale:1000
					}
				]
			}
		},
		handleChange:function(){
			var text = "";
			//实时筛选，不用点击按钮
			setInterval(function(){
				text = $('.search').val();//获取文本框输入
				if($.trim(text) != ""){
					$("table tbody tr").hide().filter(":contains('"+text+"')").show();
				}else{
					$('table tr').show();//当删除文本框的内容时，又重新显示表格所有内容
				}
			},100);
		},
		render:function(){
			return(
				<div>
					<input type='text' className="search" placeholder="搜索商品" id="serach" onchange={this.handleChange()}/>
					<table clsssName="table">
						<thead>
						<tr>
							<th>名称</th>
							<th>价格</th>
							<th>销量</th>
						</tr>
						</thead>
						<ProList data={this.state.data} />
					</table>
				</div>
			)
		}
	});
	var ProList = React.createClass({
		render:function(){
			return(
				<tbody>
				{
					this.props.data.map(function(pro, index){
						return <ProItem data={pro} key={pro.name} index={index} />
					})
				}
				</tbody>
			)
		}
	});
	
	var ProItem = React.createClass({
		render:function(){
			var pro = this.props.data;			
			return (
				<tr>
					<td>{pro.name}</td>
					<td>{pro.price}</td>
					<td>{pro.sale}</td>
				</tr>
			)
		}
	});
	
	ReactDOM.render(<Pro />,document.getElementById("pro"));