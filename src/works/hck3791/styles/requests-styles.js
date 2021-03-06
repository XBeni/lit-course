import { css } from 'lit-element';

export const requestsStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&family=Roboto:wght@300;400;500;700&display=swap');

  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    font-family: Roboto, 'Open Sans';
    font-size: 12px !important;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  table {
    margin-top: 15px;
    border-collapse: collapse;
    width: 100%;
    table-layout: fixed;
  }

  table caption {
    font-size: 1.5rem !important;
    text-align: left;
    margin-bottom: 15px;
  }

  table tbody tr:nth-child(odd) {
    background: #f6f6f6;
  }

  table thead {
    height: 1px;
    width: 1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    margin: -1;
  }

  table tr {
    display: block;
    border: 1px solid #ccd0d4;
    margin-bottom: 5px;
  }

  table td {
    display: block;
    padding: 8px 10px;
    text-align: right;
    color: #555;
  }

  table td::before {
    content: attr(data-label);
    float: left;
  }

  table td a {
    display: inline-block;
    width: 70%;
  }

  @media all and (min-width: 570px) {
    * {
      font-size: 14px !important;
    }

    table tr {
      display: table-row;
    }

    table tbody tr {
      border-top: 0;
      border-bottom: 0;
    }

    table tbody tr:last-child {
      border-bottom: 1px solid #ccd0d4;
    }

    table tr th,
    table tr td {
      display: table-cell;
      text-align: left;
    }

    table tr th {
      font-weight: normal;
      padding: 8px 10px;
    }

    table thead {
      height: 100%;
      width: auto;
      overflow: visible;
      position: static;
      margin: 0;
    }

    table td::before {
      content: none;
    }

    table td a {
      display: block;
      width: 100%;
    }
  }
`;
