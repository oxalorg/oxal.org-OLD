"""empty message

Revision ID: ceb8e55cfc3d
Revises: 4f15e545b410
Create Date: 2016-10-29 11:52:06.837843

"""

# revision identifiers, used by Alembic.
revision = 'ceb8e55cfc3d'
down_revision = '4f15e545b410'

from alembic import op
import sqlalchemy as sa


def upgrade():
    ### commands auto generated by Alembic - please adjust! ###
    op.create_table('file_details',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=True),
    sa.Column('filename', sa.String(length=120), nullable=True),
    sa.Column('size', sa.Integer(), nullable=True),
    sa.Column('creation_time', sa.DateTime(), nullable=True),
    sa.Column('views', sa.Integer(), nullable=True),
    sa.Column('path', sa.String(length=120), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    ### end Alembic commands ###


def downgrade():
    ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('file_details')
    ### end Alembic commands ###
