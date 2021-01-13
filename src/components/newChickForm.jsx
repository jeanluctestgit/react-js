
function NewChickForm(props) {
    return (
        <form onSubmit={props.onAddChick}>
          <div className="form-group">
            
              <label>Race</label>
              <input
                name="race"
                type="text"
                value={props.state.form.race}
                onChange={props.onChickChange}
                className="form-control"
              />
          </div>
            <div className="form-group">
              <label>Type</label>
              <input
                name="type"
                type="text"
                value={props.state.form.type}
                onChange={props.onChickChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>ImgUrl</label>
              <input
                name="imgUrl"
                type="text"
                value={props.state.form.imgUrl}
                onChange={props.onChickChange}
                className="form-control"
              />
            </div>
          
          <button className="btn btn-block btn-success" type="submit">
            Ajouter
          </button>
        </form>
    )
}

export default NewChickForm
