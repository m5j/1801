// calculator.js
Page({
  data: {
    memberList: [
      {
        name: "mwjAmount",
        placeholder: "闵梧峻"
      },
      {
        name: "lqxAmount",
        placeholder: "林秋霞"
      },
      {
        name: "lkAmount",
        placeholder: "林康"
      },
      {
        name: "wkfAmount",
        placeholder: "王科帆"
      }
    ],
    resultList: []
  },
  /*
   *  计算
   */
  formSubmit: function (e) {
    console.log(e);
    var warn = "";
    var flag = true; // true表示显示弹框提示
    if (e.detail.value.totalAmount == ""
      || e.detail.value.mwjAmount == ""
      || e.detail.value.lqxAmount == ""
      || e.detail.value.lkAmount == ""
      || e.detail.value.wkfAmount == "") {
      warn = "请填写数据";
    } else {
      var totalAmount = parseFloat(parseFloat(e.detail.value.totalAmount).toFixed(1));
      var mwjAmount = parseFloat(parseFloat(e.detail.value.mwjAmount).toFixed(1));
      var lqxAmount = parseFloat(parseFloat(e.detail.value.lqxAmount).toFixed(1));
      var lkAmount = parseFloat(parseFloat(e.detail.value.lkAmount).toFixed(1));
      var wkfAmount = parseFloat(parseFloat(e.detail.value.wkfAmount).toFixed(1));
      if ((mwjAmount + lqxAmount + lkAmount + wkfAmount) == totalAmount) {
        flag = false;
        var averageAmount = parseFloat((totalAmount / 4).toFixed(1));
        this.setData({
          resultList: [
            {
              name: "人均消费金额：",
              value: averageAmount
            },
            {
              name: "闵梧峻：",
              value: parseFloat((mwjAmount - averageAmount).toFixed(1))
            },
            {
              name: "林秋霞：",
              value: parseFloat((lqxAmount - averageAmount).toFixed(1))
            },
            {
              name: "林康：",
              value: parseFloat((lkAmount - averageAmount).toFixed(1))
            },
            {
              name: "王科帆：",
              value: parseFloat((wkfAmount - averageAmount).toFixed(1))
            }
          ]
        })
      } else {
        warn = "输入的金额不正确"
        flag = true;
      }

    }
    if (flag == true) {
      wx.showToast({
        title: warn,
      })
    }
  },
  /**
   * 重置表单
   */
  formReset: function () {
    this.setData({
      resultList: []
    })
  }

})