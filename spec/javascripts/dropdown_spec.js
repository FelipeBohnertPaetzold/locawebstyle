describe("Dropdown: ", function(){
  beforeEach(function(){
    loadFixtures('dropdown_fixture.html');
    locastyle.dropdown.init();
  });

  describe("Dropdown toggle", function(){
    describe('when click on a dropdown trigger', function () {

      it("should activate the related target dropdown", function(){
        $("#dropdown-test > a:first-child").trigger("click");
        expect($("#dropdown-test").hasClass("active")).toEqual(true);
      });

      it("should the activate related dropdown module", function() {
        $("#dropdown-test-2 > a:first-child").trigger("click");
        expect($("#dropdown-test-2").hasClass("active")).toEqual(false);
      });

    });
  });

});
