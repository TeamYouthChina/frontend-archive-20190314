import React from 'react';

import {
  MDBCol,
  MDBRow
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
        searchResult: ['1', '2', '3', '4'],
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
        <div
          style={{
            marginBottom: '16px'
          }}
        >
          <span style={{
            fontSize: '24px'
          }}>
            {this.props.name}
          </span>
        </div>
        <MDBRow>
          {
            this.state.backend.searchResult.map(
              (item, index) =>
                <MDBCol
                  key={index}
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
                marginTop: '8px',
                display: 'inline-block',
                fontWeight: '500',
                color: '#1569e0'
              }}
            >
              See More →
            </a>
          </div>
        </div>
      </div>
    ) : null;
  }
}
