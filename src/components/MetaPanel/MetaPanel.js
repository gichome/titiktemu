import React, { Component } from 'react';
import { Segment, Header, Accordion, Icon, Image, List } from 'semantic-ui-react';

import './MetaPanel.css';

class MetaPanel extends Component {
  state = {
    channel: this.props.currentChannel,
    privateChannel: this.props.isPrivateChannel,
    activeIndex: 0
  }

  setActiveIndex = (event, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index
      ? -1
      : index;
    this.setState({ activeIndex: newIndex });
  };

  formatCount = num => (num <= 10)
    ? `${num} post so far`
    : `for ${num} posts!! Welcome Influencer!`;

  displayTopPosters = posts => 
    Object.entries(posts)
          .sort((a, b) => b[1] - a[1])
          .map(([key, val], i) => (
            <List.Item key={i}>
              <Image avatar src={val.avatar} />
              <List.Content>
                <List.Header as="a">{key}</List.Header>
                <List.Description>{this.formatCount(val.count)}</List.Description>
              </List.Content>
            </List.Item>
          ))
          .slice(0, 5);
  

  render() {
    const { activeIndex, privateChannel, channel } = this.state;
    const { topPosters } = this.props;

    if (privateChannel) return null;

    return (
      <Segment
        className="metapanel"
        loading={!channel}
      >
        <Header as="h4" attached="top">
          About {/* */} # {channel && channel.name}
        </Header>
        <Accordion styled attached="true">
          <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={this.setActiveIndex}
          >
            <Icon name="dropdown" />
            <Icon name="info" />
            Channel Mission
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            {
              channel && channel.details
            }
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === 1}
            index={1}
            onClick={this.setActiveIndex}
          >
            <Icon name="dropdown" />
            <Icon name="trophy" />
            Our Hero
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            - Still waiting for one -
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === 2}
            index={2}
            onClick={this.setActiveIndex}
          >
            <Icon name="dropdown" />
            <Icon name="user circle" />
            5 Top Posters
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 2}>
            <List>
              {topPosters && this.displayTopPosters(topPosters)}
            </List>
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === 3}
            index={3}
            onClick={this.setActiveIndex}
          >
            <Icon name="dropdown" />
            <Icon name="pencil alternate" />
            Channel Admin
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 3}>
            <Header as="h3">
              <Image circular src=
                {
                  channel && channel.createdBy.avatar
                }
              />
                {
                  channel && channel.createdBy.name
                }
            </Header>
          </Accordion.Content>
        </Accordion>
      </Segment>
    );
  }
}

export default MetaPanel;