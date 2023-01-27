"""Create backfills table

Revision ID: 26305e46df52
Revises: 6aecc9bc451c
Create Date: 2023-01-27 10:50:04.283588

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '26305e46df52'
down_revision = '6aecc9bc451c'
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('backfill',
    sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('block_uuid', sa.String(length=255), nullable=True),
    sa.Column('completed_at', sa.DateTime(timezone=True), nullable=True),
    sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.text('(CURRENT_TIMESTAMP)'), nullable=True),
    sa.Column('end_datetime', sa.DateTime(timezone=True), nullable=True),
    sa.Column('failed_at', sa.DateTime(timezone=True), nullable=True),
    sa.Column('interval_type', sa.Enum('SECOND', 'MINUTE', 'HOUR', 'DAY', 'WEEK', 'MONTH', 'YEAR', 'CUSTOM', name='intervaltype'), nullable=True),
    sa.Column('interval_units', sa.Integer(), nullable=True),
    sa.Column('metrics', sa.JSON(), nullable=True),
    sa.Column('name', sa.String(length=255), nullable=True),
    sa.Column('pipeline_schedule_id', sa.Integer(), nullable=True),
    sa.Column('pipeline_uuid', sa.String(length=255), nullable=True),
    sa.Column('start_datetime', sa.DateTime(timezone=True), nullable=True),
    sa.Column('started_at', sa.DateTime(timezone=True), nullable=True),
    sa.Column('status', sa.Enum('INITIAL', 'RUNNING', 'COMPLETED', 'FAILED', 'CANCELLED', name='status'), nullable=True),
    sa.Column('updated_at', sa.DateTime(timezone=True), server_default=sa.text('(CURRENT_TIMESTAMP)'), nullable=True),
    sa.Column('variables', sa.JSON(), nullable=True),
    sa.ForeignKeyConstraint(['pipeline_schedule_id'], ['pipeline_schedule.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    with op.batch_alter_table('pipeline_run', schema=None) as batch_op:
        batch_op.add_column(sa.Column('backfill_id', sa.Integer(), nullable=True))
        batch_op.create_foreign_key('pipeline_run_backfill_id', 'backfill', ['backfill_id'], ['id'])

    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('pipeline_run', schema=None) as batch_op:
        batch_op.drop_constraint('pipeline_run_backfill_id', type_='foreignkey')
        batch_op.drop_column('backfill_id')

    op.drop_table('backfill')
    # ### end Alembic commands ###
