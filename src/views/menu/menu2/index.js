/*
 * @Description:
 * @Author: lxd
 * @Date: 2020-11-25 16:41:23
 * @LastEditors: lxd
 * @LastEditTime: 2020-11-30 09:48:58
 */
function Menu2(props) {
  return (
    <div style={{ padding: '20px', background: '#fff' }}>
      menu2
      <div style={{ margin: '20px', padding: '20px', background: '#ccc' }}>
        {props.children}
      </div>
    </div>
  )
}
export default Menu2
