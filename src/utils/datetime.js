/**
 * 时间日期相关操作
 */


/**
 * 时间格式化
 * 将 2018-09-23T11:54:16.000+0000 格式化成 2018/09/23 11:54:16
 * @param datetime 国际化日期格式
 */
export function format (datetime) {
    return formatWithSeperator(datetime, "/", ":");
  }
  
  /**
   * 时间格式化
   * 将 2018-09-23T11:54:16.000+0000 格式化成类似 2018/09/23 11:54:16
   * 可以指定日期和时间分隔符
   * @param datetime 国际化日期格式
   */
  export function formatWithSeperator (datetime, dateSeprator, timeSeprator) {
    if (datetime != null) {
      const dateMat = new Date(datetime);
      const year = dateMat.getFullYear();
      const month = dateMat.getMonth() + 1;
      const day = dateMat.getDate();
      const hh = dateMat.getHours();
      const mm = dateMat.getMinutes();
      const ss = dateMat.getSeconds();
      const timeFormat = year + dateSeprator + month + dateSeprator + day + " " + hh + timeSeprator + mm + timeSeprator + ss;
      return timeFormat;
    }
  }
  
  /**
   * 时间格式化
   * 将 2018-09-23T11:54:16.000+0000 格式化成 2018/09/23
   * @param datetime 国际化日期格式
   */
  export function formatYMD (datetime) {
    return formatWithYMD(datetime, "-", ":");
  }
  
  /**
   * 时间格式化
   * 将 2018-09-23T11:54:16.000+0000 格式化成 20180923
   * @param datetime 国际化日期格式
   */
  export function formatPro (datetime) {
    if (datetime != null) {
      let d = new Date();
      let year = d.getFullYear();
      let month = d.getMonth() + 1;
      month = month < 10 ? ("0" + month) : month;
      let dt = d.getDate();
      dt = dt < 10 ? ("0" + dt) : dt;
      let timeFormat = year + "-" + month + "-" + dt;
      return timeFormat;
    }
  }
  
  /**
   * 时间格式化
   * 将 2018-09-23T11:54:16.000+0000 格式化成 2018-09
   * @param datetime 国际化日期格式
   */
  export function formatProEst (datetime) {
    if (datetime != null) {
      let d = new Date(datetime);
      let year = d.getFullYear();
      let month = d.getMonth() + 1;
      month = month < 10 ? ("0" + month) : month;
      let dt = d.getDate();
      dt = dt < 10 ? ("0" + dt) : dt;
      let timeFormat = year + "-" + month;
      return timeFormat;
    }
  }
  
  /**
   * 时间格式化
   * 将 2018-09-23T11:54:16.000+0000 格式化成 2018-09
   * @param datetime 国际化日期格式
   */
  export function formatProWK (datetime) {
    if (datetime != null) {
      let d = new Date(datetime);
      let year = d.getFullYear();
      let month = d.getMonth() + 1;
      month = month < 10 ? ("0" + month) : month;
      let dt = d.getDate();
      dt = dt < 10 ? ("0" + dt) : dt;
      let timeFormat = year + "-" + month + "-" + dt;
      return timeFormat;
    }
  }
  
  /**
   * 时间格式化
   * 将 2018-09-23T11:54:16.000+0000 格式化成类似 2018/09/23
   * 可以指定日期和时间分隔符
   * @param datetime 国际化日期格式
   */
  export function formatWithYMD (datetime, dateSeprator, timeSeprator) {
    if (datetime != null) {
      const dateMat = new Date(datetime);
      const year = dateMat.getFullYear();
      const month = dateMat.getMonth() + 1;
      const day = dateMat.getDate();
      const timeFormat = year + dateSeprator + month + dateSeprator + day;
      return timeFormat;
    }
  }
  
  /**
   * 获取当前月初日
   * 2018-01-15传入 得到2018-01-01
   * @param datetime 当前日期
   */
  export function monthStrtDt (datetime) {
    if (datetime != null) {
      const dateMat = new Date(datetime);
      const year = dateMat.getFullYear();
      const month = dateMat.getMonth();
      const monthStartDate = new Date(year, month, 1); 
      return monthStartDate;
    }
  }
  
  /**
   * 获取当前月末日
   * 2018-01-15传入 得到2018-01-31
   * @param datetime 当前日期
   */
  export function monthEndDt (datetime) {
    if (datetime != null) {
      const dateMat = new Date(datetime);
      const year = dateMat.getFullYear();
      const month = dateMat.getMonth();
      const monthEndDate = new Date(year, month + 1, 1) - 1; 
      return monthEndDate;
    }
  }
  