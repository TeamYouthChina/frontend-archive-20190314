import React from 'react';

import {
  MDBCol,
  MDBRow,
  MDBContainer
} from 'mdbreact';

import {JobCardSquare} from '../../general-component/job-card-square';

export class JobListHome extends React.Component {

  constructor(props) {
    super(props);
    /*
    * */
    this.state = {};
  }

  componentWillMount() {
    let mockData =
      {
        searchResult: ['1', '1', '1', '1', '1', '1'],
        status: {
          code: 2000
        }
      };
    this.setState(() => {
      return {backend: mockData};
    });
  }

  render() {
    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (
      <div
        style={{
          padding: '24px 16px'
        }}
      >
        <MDBContainer>
          <div
            style={{
              marginBottom: '16px'
            }}
          >
            <span style={{
              fontSize: '18px',
              color: '#454F69'
            }}>
              {this.props.name}
            </span>
          </div>

          <MDBRow center>
            {
              this.state.backend.searchResult.map(
                (item, index) =>
                  <MDBCol
                    key={index}
                    className="my-3 px-4 py-1"
                    size="12"
                    md="6"
                    xl="4"
                  >
                    <JobCardSquare
                      id={item}
                    />
                  </MDBCol>
              )
            }
          </MDBRow>
          <div>
            <div>
              <a
                href="https://www.google.com/"
                style={{
                  fontSize: '16px',
                  marginTop: '8px',
                  display: 'inline-block',
                  fontWeight: '500',
                  color: '#454F69'
                }}
              >
                显示全部
              </a>
            </div>
          </div>
        </MDBContainer>
      </div>
    ) : null;
  }
}
