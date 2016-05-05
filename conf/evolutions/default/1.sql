# --- Created by Ebean DDL
# To stop Ebean DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table submissionanalytics (
  agent_name                    varchar(255),
  underwriter_name              varchar(255),
  agent_code                    varchar(255),
  quoted_count                  varchar(255),
  insured_state                 varchar(255),
  submission_no                 varchar(255),
  received_date                 varchar(255),
  received_month                varchar(255),
  received_year                 varchar(255),
  quoted_date                   varchar(255),
  quoted_month                  varchar(255),
  quoted_year                   varchar(255),
  rejected_date                 varchar(255),
  reject_reason                 varchar(255),
  pol_num                       varchar(255)
);


# --- !Downs

drop table if exists submissionanalytics;

