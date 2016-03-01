(function(){
Template.__checkName("postSubmit");
Template["postSubmit"] = new Template("Template.postSubmit", (function() {
  var view = this;
  return HTML.Raw('<form action="" class="main form page">\n    <div class="form-group">\n      <label for="url" class="control-label">{URL}</label>\n      <div class="controls">\n        <input type="text" name="url" id="url" value="" placeholder="Your URL" class="form-control">\n      </div>\n    </div>\n    <div class="form-group">\n      <label for="title" class="control-label">{Title}</label>\n      <div class="controls">\n        <input type="text" name="title" id="title" value="" placeholder="Name your post" class="form-control">\n      </div>\n    </div>\n    <input type="submit" value="Submit" class="btn btn-primary">\n  </form>');
}));

}).call(this);