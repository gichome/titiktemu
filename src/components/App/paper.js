import React, { Component } from 'react';

import {
	ReactiveBase, SingleDropdownRange,
	ResultList, DataSearch
} from '@appbaseio/reactivesearch';

import './paper.css';
//import index.css for global container
import '../../index.css';
import Navbar from '../Navbar';

import System from '../iframe/iframesystem';

class paper extends Component {
	render() {
		return (
			<div className="main-container">
				<Navbar />
				<ReactiveBase
					app="titiktemu-paper"
					credentials="0A46CoJZO:b8511923-aece-4b8a-970e-582d1c2b6c74"
					theme={{
            typography: {
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "Nunito Sans", sans-serif',
              fontSize: "16px"
            }
          }}
				>

          {/*Menubar Container*/}
					<div className="menubar-container"> 
						
            {/* Search Component */}
            <div className="search-component">
                <DataSearch
                  componentId="mainSearch"
                  dataField={["original_title"]}
                  categoryField="title"
                  className="search-bar"
                  queryFormat="and"
                  placeholder="Search paper here"
                  iconPosition="right"
                  autosuggest={true}
									filterLabel="search"
									style={{borderColor:"#E43F35"}}
                />
            </div>

            {/* Spotify Component */}
            <div className="spotify-component">
              <System src="https://open.spotify.com/embed/user/chillhopmusic/playlist/74sUjcvpGfdOvCHvgzNEDO" width="240" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"/>
            </div>
          </div>

						{/* Result list */}
						<div className="row reverse-labels">
							<div className="col">
								<SingleDropdownRange
									componentId="BookSensor"
									dataField="average_rating"
									title="SingleDropdownRange"
									data={[
										{ start: 0, end: 3, label: 'Rating < 3' },
										{ start: 3, end: 4, label: 'Rating 3 to 4' },
										{ start: 4, end: 5, label: 'Rating > 4' },
									]}
								/>
							</div>
							<div className="col" style={{ backgroundColor: '#fafafa' }}>
								<ResultList
									componentId="SearchResult"
									dataField="original_title"
									size={5}
									onData={this.paperlist}
									className="result-list-container"
									pagination={false}
									stream={true}
									paginationAt="bottom"
									Loader = "Loading..."
									noResults = "No results were found..."
									URLParams
									react={{
										and: [
											"BookSensor",
											"mainSearch"
										]
									}}
								/>
							</div>
						</div>
				</ReactiveBase>
			</div>
		);
	}

	paperlist(data) {
		return {
			title: (
				<a
					target="homepage.keyword"
					href={data.homepage}	>
					<h3
						className="book-title"
						// dangerouslySetInnerHTML={{ __html: data.original_title }}
					>
						{data.original_title}
					</h3>
				</a>
			),
			description: (
				<div className="flex column justify-space-between">
					<div>
						<div>
							Published by	:{" "}<span className="authors-list">{data.author_data}</span>
						</div>
						<div>
							<span>
								Paper Detail	: <p className="paper-overview">{data.overview}</p>
							</span>
						</div>
					</div>
					<span className="pub-year">{data.release_date}</span>
				</div>
			),
			image: data.img_source,
		};
	}
}

export default paper;
